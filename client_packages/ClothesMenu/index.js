const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

let player = mp.players.local;
let screen = mp.game.graphics.getScreenActiveResolution(1, 1);
let menuPos = new Point(screen.x - 450, screen.y - 1000);
let menuItemName = '  ---------------------';
let brwsr;

let Color1 = new Color(153, 153, 153, 255);
let Color2 = new Color(100, 100, 100, 255);

let arrayNumberColor = [];
for (i = 0; i < 100; i++) 
    arrayNumberColor.push(i.toString());

let mainMenu = new Menu("Комплект", "", menuPos);

// ========================= Руки/Перчатки =========================
let menuHandsItem = new UIMenuItem(menuItemName);
menuHandsItem.SetRightLabel('Руки/Перчатки');
menuHandsItem.BackColor = Color1;

mainMenu.AddItem(menuHandsItem);

let maosDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(3) + 1; i++) maosDrawable.push(i.toString());

mainMenu.AddItem(maosItem = new UIMenuListItem("Текстура", "", new ItemsCollection(maosDrawable)));
mainMenu.AddItem(maosTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ========================= Нижняя одежда =========================
let menuUnderWearItem = new UIMenuItem(menuItemName);
menuUnderWearItem.SetRightLabel('Нижняя одежда');
menuUnderWearItem.BackColor = Color2;

mainMenu.AddItem(menuUnderWearItem);

let camisasDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(8) + 1; i++) camisasDrawable.push(i.toString());

mainMenu.AddItem(camisasItem = new UIMenuListItem("Текстура", "Пустая текстура:\n  Для мужчин (15)\n  Для женщин (2)", new ItemsCollection(camisasDrawable)));
mainMenu.AddItem(camisasTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ========================= Верхняя одежда =========================
let menuOuterwearItem = new UIMenuItem(menuItemName);
menuOuterwearItem.SetRightLabel('Верхняя одежда');
menuOuterwearItem.BackColor = Color1;

mainMenu.AddItem(menuOuterwearItem);

let jaquetasDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(11) + 1; i++) jaquetasDrawable.push(i.toString());

mainMenu.AddItem(jaquetasItem = new UIMenuListItem("Текстура", "Пустая текстура:\n  Для мужчин (8)\n  Для женщин (57)", new ItemsCollection(jaquetasDrawable)));
mainMenu.AddItem(jaquetasTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));


// ========================= Маска =========================
let menuMaskItem = new UIMenuItem(menuItemName);
menuMaskItem.SetRightLabel('Маска');
menuMaskItem.BackColor = Color2;

mainMenu.AddItem(menuMaskItem);

let mascarasDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(1) + 1; i++) mascarasDrawable.push(i.toString());

mainMenu.AddItem(mascarasItem = new UIMenuListItem("Текстура", "", new ItemsCollection(mascarasDrawable)));
mainMenu.AddItem(mascarasTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ========================= Штаны =========================
let menuLegsItem = new UIMenuItem(menuItemName);
menuLegsItem.SetRightLabel('Штаны');
menuLegsItem.BackColor = Color1;

mainMenu.AddItem(menuLegsItem);

let calcasDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(4) + 1; i++) calcasDrawable.push(i.toString());

mainMenu.AddItem(calcasItem = new UIMenuListItem("Текстура", "", new ItemsCollection(calcasDrawable)));
mainMenu.AddItem(calcasTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ========================= Обувь =========================
let menuShoesItem = new UIMenuItem(menuItemName);
menuShoesItem.SetRightLabel('Обувь');
menuShoesItem.BackColor = Color2;

mainMenu.AddItem(menuShoesItem);

let sapatosDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(6) + 1; i++) sapatosDrawable.push(i.toString());

mainMenu.AddItem(sapatosItem = new UIMenuListItem("Текстура", "", new ItemsCollection(sapatosDrawable)));
mainMenu.AddItem(sapatosTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ========================= Аксессуары =========================
let menuAcsesItem = new UIMenuItem(menuItemName);
menuAcsesItem.SetRightLabel('Аксессуары');
menuAcsesItem.BackColor = Color1;

mainMenu.AddItem(menuAcsesItem);

let acessoriosDrawable = [];
for (i = 0; i < player.getNumberOfDrawableVariations(7) + 1; i++) acessoriosDrawable.push(i.toString());

mainMenu.AddItem(acessoriosItem = new UIMenuListItem("Текстура", "", new ItemsCollection(acessoriosDrawable)));
mainMenu.AddItem(acessoriosTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));


// ========================= Головной убор =========================
let menuHatsItem = new UIMenuItem(menuItemName);
menuHatsItem.SetRightLabel('Головной убор');
menuHatsItem.BackColor = Color2;

mainMenu.AddItem(menuHatsItem);

let hatsDrawable = [];
for (i = 0; i < player.getNumberOfPropDrawableVariations(0) + 1; i++) hatsDrawable.push(i.toString());

mainMenu.AddItem(chapeusItem = new UIMenuListItem("Текстура", "", new ItemsCollection(hatsDrawable)));
mainMenu.AddItem(hatsTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));


// ========================= Очки =========================
let menuGlassesItem = new UIMenuItem(menuItemName);
menuGlassesItem.SetRightLabel('Очки');
menuGlassesItem.BackColor = Color1;

mainMenu.AddItem(menuGlassesItem);

let oculosDrawable = [];
for (i = 0; i < player.getNumberOfPropDrawableVariations(1) + 1; i++) oculosDrawable.push(i.toString())

mainMenu.AddItem(oculosItem = new UIMenuListItem("Текстура", "", new ItemsCollection(oculosDrawable)));
mainMenu.AddItem(oculosTextureItem = new UIMenuListItem("Цвет", "", new ItemsCollection(arrayNumberColor)));

// ====================== Donate ==========================
mainMenu.AddItem(new UIMenuItem(""));
let menuDonateItem = new UIMenuItem("Пожертвовать", "Чтобы закрыть окно с донатом -\nнажмите ESC");
menuDonateItem.SetRightLabel(':)');
menuDonateItem.SetLeftBadge(BadgeStyle.Star);
menuDonateItem.ForeColor = new Color(255, 255, 0, 255);
menuDonateItem.BackColor = new Color(112, 122, 112, 255);
mainMenu.AddItem(menuDonateItem);

let groupDrawable = new Map([
    [mascarasItem, 1],
    [jaquetasItem, 11],
    [camisasItem, 8],
    [calcasItem, 4],
    [sapatosItem, 6],
    [maosItem, 3],
    [acessoriosItem, 7],
    [chapeusItem, 100],
    [oculosItem, 101]
]);

let drawable = 0;
let idComponent = 0;
let setter = 'setClothes';
mainMenu.ListChange.on((item, listIndex) => { 
    
    if(groupDrawable.has(item))
    {
        if(groupDrawable.get(item) == 100 || groupDrawable.get(item) == 101)
        {
            setter = 'setProp';
            idComponent = groupDrawable.get(item) - 100;
        } else {
            setter = 'setClothes';
            idComponent = groupDrawable.get(item);
        }        
        drawable = parseInt(item.SelectedItem.DisplayText);        
        mp.events.callRemote(setter, idComponent, drawable, 0);
    } else {
        mp.events.callRemote(setter, idComponent, drawable, parseInt(item.SelectedItem.DisplayText));
    }   
});

mainMenu.ItemSelect.on((item, listIndex) => {
    if (item == menuDonateItem)
    {
        brwsr = mp.browsers.new('https://www.donationalerts.com/r/suppmkl');
        brwsr.active = true;
        mp.gui.cursor.visible = true;
        mp.gui.chat.show(false);
    }
});

mainMenu.Visible = false;

mp.keys.bind(0x71, false, () => {
    if (mainMenu.Visible) {
        mainMenu.Close();
    } else {        
        mainMenu.Open();
    }
});

mp.keys.bind(0x1B, false, () => {
    brwsr.active = false;
    mp.gui.chat.show(true);
    mp.gui.cursor.visible = false;
});

// https://www.donationalerts.com/r/suppmkl
