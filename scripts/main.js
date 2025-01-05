const target = "assemblyDrone";
const baseColor = Color.valueOf("a7b5f7");
let palette = [
Color.valueOf("707cd7"),
baseColor,
Color.valueOf("373f8a")
];
let palettei = [
Color.valueOf("707cd7").rgba(),
baseColor.rgba(),
Color.valueOf("373f8a").rgba()
];
let palette2 = [
    Color.valueOf("291073"),
    baseColor,
    Color.valueOf("291073")
];
let palettei2 = [
    Color.valueOf("291073").rgba(),
    baseColor.rgba(),
    Color.valueOf("291073").rgba()
];


Events.on(ContentInitEvent, () => {

  let fonts = [Fonts.def, Fonts.outline];
  let ch = Fonts.getUnicode(target);

  let size = Mathf.round(Fonts.def.getData().lineHeight / Fonts.def.getData().scaleY);
    let tex1 = Core.atlas.find("mindustry-alasion-frost");
    let tex2 = Core.atlas.find("mindustry-alasion-nebulon");
  let out = Scaling.fit.apply(tex1.width, tex1.height, size, size);

  for(let font of fonts){
    let list = Reflect.get(Font, font, "regions");
    list.add(tex1);
    Reflect.set(Font, font, "regions", list);

    let glyph = font.getData().getGlyph(ch);
    glyph.page = 1;

    glyph.id = ch;
    glyph.srcX = glyph.srcY = 0;
//    glyph.width = out.x;
//    glyph.height = out.y;
    glyph.width = 62
    glyph.height = 62
    glyph.u = tex1.u;
    glyph.v = tex1.v2;
    glyph.u2 = tex1.u2;
    glyph.v2 = tex1.v;
    glyph.xoffset = 0;
    glyph.yoffset = -size;
    glyph.xadvance = size;
    glyph.kerning = null;
    glyph.fixedWidth = true;

    //font.getData().setGlyphRegion(glyph, tex);
  }

  const Frost = Team.get(6);
  Frost.name = "Frost";
  //Dread.color.set(Color.valueOf("87ceeb"));
  Reflect.set(Team, Frost, "color", baseColor);

  let newPal = Reflect.get(Team, Frost, "palette");
  newPal[0] = palette[0];
  newPal[1] = palette[1];
  newPal[2] = palette[2];
  Reflect.set(Team, Frost, "palette", newPal);
  let newI = Reflect.get(Team, Frost, "palettei");
  newI[0] = palettei[0];
  newI[1] = palettei[1];
  newI[2] = palettei[2];
  Reflect.set(Team, Frost, "palettei", newI);

  Frost.hasPalette = true;
    Frost.emoji = Fonts.getUnicodeStr(target);
    const Nebulon = Team.get(7);
    Nebulon.name = "Nebulon";
    //Dread.color.set(Color.valueOf("87ceeb"));
    Reflect.set(Team, Nebulon, "color", baseColor);

    let newPal2 = Reflect.get(Team, Nebulon, "palette2");
    newPal2[0] = palette2[0];
    newPal2[1] = palette2[1];
    newPal2[2] = palette2[2];
    Reflect.set(Team, Nebulon, "palette2", newPal);
    let newI2 = Reflect.get(Team, Frost, "palettei2");
    newI2[0] = palettei2[0];
    newI2[1] = palettei2[1];
    newI2[2] = palettei2[2];
    Reflect.set(Team, Nebulon, "palettei2", newI);

    Nebulon.hasPalette = true;
    Nebulon.emoji = Fonts.getUnicodeStr(target);
});
