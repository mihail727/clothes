var isMale = true;

mp.events.add('keypress:F3', (player) => {
    if (isMale)
    {
        player.model = mp.joaat('mp_f_freemode_01');
        isMale = false;
    }
    else {
        player.model = mp.joaat('mp_m_freemode_01');
        isMale = true;
    }
});

mp.events.add("playerReady", player => {
    player.outputChatBox(`Нажмите !{#dbeb34}F2!{#ffffff} чтобы открыть меню гардероба`);
    player.outputChatBox(`Нажмите !{#dbeb34}F3!{#ffffff} чтобы сменить пол персонажа`);
});