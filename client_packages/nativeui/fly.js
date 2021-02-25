const control_keys =
{
	key_w: 0x57,
	key_s: 0x53,
	key_a: 0x41,
	key_d: 0x44,
	key_e: 0x45,
	key_q: 0x51,
	key_space: 0x20,
	key_ctrl: 0x11
};

const localPlayer = mp.players.local;

const faircam = {
	enabled: false,
	camera: null,
	movement_speed: 1
};

mp.events.add('render', () => {
	const graphics = mp.game.graphics;
	if (!faircam.enabled) {
		return false;
	}

	const staticPosition = faircam.camera.getCoord();
	const rotation = faircam.camera.getRot(2);
	const position = faircam.camera.getCoord();
	const direction = faircam.camera.getDirection();

	const xMagnitude = mp.game.controls.getDisabledControlNormal(0, 1);
	const yMagnitude = mp.game.controls.getDisabledControlNormal(0, 2);

	if (mp.keys.isDown(control_keys.key_s)) {
		position.x = position.x - (direction.x * faircam.movement_speed);
		position.y = position.y - (direction.y * faircam.movement_speed);
		position.z = position.z - (direction.z * faircam.movement_speed);
	}

	if (mp.keys.isDown(control_keys.key_w)) {
		position.x = position.x + (direction.x * faircam.movement_speed);
		position.y = position.y + (direction.y * faircam.movement_speed);
		position.z = position.z + (direction.z * faircam.movement_speed);
	}

	if (mp.keys.isDown(control_keys.key_a)) {
		position.x = position.x + (-direction.y * faircam.movement_speed);
		position.y = position.y + (direction.x * faircam.movement_speed);
	}

	if (mp.keys.isDown(control_keys.key_d)) {
		position.x = position.x - (-direction.y * faircam.movement_speed);
		position.y = position.y - (direction.x * faircam.movement_speed);
	}

	if (mp.keys.isDown(control_keys.key_ctrl)) {
		position.z = position.z - faircam.movement_speed;
	}

	if (mp.keys.isDown(control_keys.key_space)) {
		position.z = position.z + faircam.movement_speed;
	}

	if (mp.keys.isDown(control_keys.key_q)) {
		faircam.movement_speed -= 0.01;
	}

	if (mp.keys.isDown(control_keys.key_e)) {
		faircam.movement_speed += 0.01;
	}

	if (xMagnitude !== 0) {
		rotation.z = rotation.z + (-xMagnitude) * (faircam.movement_speed * 10);
	}

	if (yMagnitude !== 0) {
		rotation.x = rotation.x + (-yMagnitude) * (faircam.movement_speed * 10);
	}

	mp.game.graphics.drawText(`Movement speed: ${faircam.movement_speed}`, 4, [255, 255, 255, 255], 0.4, 0.4, true, 0.25, 0.92);

	faircam.camera.setCoord(position.x, position.y, position.z);
    localPlayer.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
	faircam.camera.setRot(rotation.x, 0, rotation.z, 2);

});

mp.events.add('playerCommand', (command) => {
	const args = command.split(/[ ]+/);
	const commandName = args.splice(0, 1)[0];

	switch (commandName) {
		case 'fair-cam': {
			if (!args.length || !args[0]) {
				return false;
			}

			if (args[0] === 'start') {
				faircam.enabled = true;
				mp.game.graphics.notify('Enable');
				if(!faircam.camera) {
					faircam.camera = mp.cameras.new('default', localPlayer.position, new mp.Vector3(0, 0, 0), 90.0);
				}
				faircam.camera.setCoord(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z);
				faircam.camera.setActive(true);
				mp.game.cam.renderScriptCams(true, true, 3000, true, true);
				localPlayer.setInvincible(true);
				localPlayer.setAlpha(0);
			} else if (args[0] === 'stop') {
				faircam.enabled = false;
				mp.game.graphics.notify('Disable');
				if(faircam.camera) {
					faircam.camera.setActive(false);
					mp.game.cam.renderScriptCams(false, true, 3000, true, true);
					faircam.camera.destroy();
					faircam.camera = null;
				}
              
				const position = localPlayer.position;
				position.z = mp.game.gameplay.getGroundZFor3dCoord(position.x, position.y, position.z, 0, false);
				localPlayer.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
				localPlayer.setInvincible(false);
				localPlayer.setAlpha(255);
			}
			break;
		}
	}
});