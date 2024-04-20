enum Shape {
  Rectangular = "rectangular",
  Circular = "circular",
}

enum Size {
  TwoByTwo = "2x2",
  ThreeByThree = "3x3",
  FourByFour = "4x4",
}

enum Style {
  Minimalism = "minimalism",
  Retro = "retro",
  Cartoonism = "cartoonism",
  Sketch = "sketch",
  PopArt = "pop-art",
  Graffiti = "graffiti",
}

interface ImageConfiguration {
  placeVisited: string;
  elements: string;
  colors: string;
  shape: Shape;
  size: Size;
  style: Style;
}


export { Shape, Size, Style, type ImageConfiguration }