const target = "assemblyDrone";
const baseColor1 = Color.valueOf("a7b5f7");
let palette = [
    Color.valueOf("707cd7"),
    baseColor1,
    Color.valueOf("373f8a")
];
let palettei = [
    Color.valueOf("707cd7").rgba(),
    baseColor1.rgba(),
    Color.valueOf("373f8a").rgba()
];
Events.on(ContentInitEvent, () => {

    let fonts = [Fonts.def, Fonts.outline];
    let ch = Fonts.getUnicode(target);

    let size = Mathf.round(Fonts.def.getData().lineHeight / Fonts.def.getData().scaleY);
    let tex = Core.atlas.find("mindustry-alasion-frost");
    let out = Scaling.fit.apply(tex.width, tex.height, size, size);

    for (let font of fonts) {
        let list = Reflect.get(Font, font, "regions");
        list.add(tex);
        Reflect.set(Font, font, "regions", list);

        let glyph = font.getData().getGlyph(ch);
        glyph.page = 1;

        glyph.id = ch;
        glyph.srcX = glyph.srcY = 0;
        //    glyph.width = out.x;
        //    glyph.height = out.y;
        glyph.width = 62
        glyph.height = 62
        glyph.u = tex.u;
        glyph.v = tex.v2;
        glyph.u2 = tex.u2;
        glyph.v2 = tex.v;
        glyph.xoffset = 0;
        glyph.yoffset = -size;
        glyph.xadvance = size;
        glyph.kerning = null;
        glyph.fixedWidth = true;

        //font.getData().setGlyphRegion(glyph, tex1);
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
});
const baseColor2 = Color.valueOf("230f60");
let palette2 = [
    Color.valueOf("11072d"),
    baseColor2,
    Color.valueOf("3f219a")
];
let palettei2 = [
    Color.valueOf("11072d").rgba(),
    baseColor2.rgba(),
    Color.valueOf("3f219a").rgba()
];
Events.on(ContentInitEvent, () => {

    let fonts = [Fonts.def, Fonts.outline];
    let ch = Fonts.getUnicode(target);

    let size = Mathf.round(Fonts.def.getData().lineHeight / Fonts.def.getData().scaleY);
    let tex = Core.atlas.find("mindustry-alasion-frost");
    let out = Scaling.fit.apply(tex.width, tex.height, size, size);

    for (let font of fonts) {
        let list = Reflect.get(Font, font, "regions");
        list.add(tex);
        Reflect.set(Font, font, "regions", list);

        let glyph = font.getData().getGlyph(ch);
        glyph.page = 1;

        glyph.id = ch;
        glyph.srcX = glyph.srcY = 0;
        //    glyph.width = out.x;
        //    glyph.height = out.y;
        glyph.width = 62
        glyph.height = 62
        glyph.u = tex.u;
        glyph.v = tex.v2;
        glyph.u2 = tex.u2;
        glyph.v2 = tex.v;
        glyph.xoffset = 0;
        glyph.yoffset = -size;
        glyph.xadvance = size;
        glyph.kerning = null;
        glyph.fixedWidth = true;

        //font.getData().setGlyphRegion(glyph, tex1);
    }

    const Nebulon = Team.get(7);
    Nebulon.name = "Nebulon";
    //Dread.color.set(Color.valueOf("87ceeb"));
    Reflect.set(Team, Nebulon, "color", baseColor);

    let newPal = Reflect.get(Team, Nebulon, "palette");
    newPal[0] = palette2[0];
    newPal[1] = palette2[1];
    newPal[2] = palette2[2];
    Reflect.set(Team, Nebulon, "palette", newPal);
    let newI = Reflect.get(Team, Nebulon, "palettei");
    newI[0] = palettei2[0];
    newI[1] = palettei2[1];
    newI[2] = palettei2[2];
    Reflect.set(Team, Nebulon, "palettei", newI);

    Nebulon.hasPalette = true;
    Nebulon.emoji = Fonts.getUnicodeStr(target);
});