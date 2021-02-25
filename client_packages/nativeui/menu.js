const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;

mp.gui.cursor.visible = false;
mp.gui.chat.show(false);

let items = [];
for (i = 100; i < 100000; i++) {
    items.push(i);
}

const ui = new Menu("Test UI", "Test UI Subtitle", new Point(50, 50));
const item1 = new UIMenuListItem("Test list item", "Ut labore dolore elit pariatur cupidatat sint sit anim fugiat consectetur ullamco.", new ItemsCollection(items), 20);
item1.ForeColor = new Color(190, 0, 0);
item1.SetLeftBadge(BadgeStyle.GoldMedal);
ui.AddItem(item1);
const item2 = new UIMenuCheckboxItem("Test check item", true, "Amet sint consectetur qui adipisicing tempor aliqua ullamco et.");
ui.AddItem(item2);

ui.ItemSelect.on((item) => {
    if (item == item1) {
        console.log(item.SelectedItem.DisplayText, item.SelectedValue);
    }
});

mp.keys.bind(0x71, false, () => {
    if (ui.Visible)
        ui.Close();
    else
        ui.Open();
});