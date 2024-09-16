# Radial Grid

## Description

The purpose of this library is to provide a wrapper that organizes its children into a circular layout.

## Installation

`npm install radial-grid`

## Usage

### Basic

This will produce 6 evenly-spaced tick marks, all tilted toward the center.

```js
import RadialGrid from "radial-grid";

<RadialGrid>
  <p>|</p>
  <p>|</p>
  <p>|</p>
  <p>|</p>
  <p>|</p>
  <p>|</p>
</RadialGrid>;
```

### Preserve Child Rotation

Should you want the children you pass to remain in the orientation you provide, you may use the `preserveChildRotation` prop. For example, to make a clock-like layout:

```js
<RadialGrid preserveChildRotation>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
  <p>7</p>
  <p>8</p>
  <p>9</p>
  <p>10</p>
  <p>11</p>
  <p>12</p>
</RadialGrid>
```

### Start and End angles

If you want a more elaborate layout than a simple circle, consider using the `startAngle` and `endAngle` props. These take any number (in degrees) to modify the start and end position of the elements.

**Note:** The way angles are calculated, using custom start and end angles often produces an undesired effect of the last element not reaching the given end angle. To fix this, use the `lastMeetEnd` prop to have the first child element sitting on the given start angle, the last child element sitting on the given end angle, and the rest of the elements evenly spaced throughout.

```js
<RadialGrid startAngle={90} endAngle={270} lastMeetEnd>
  <p>|</p>
  <p>|</p>
  <p>|</p>
  <p>|</p>
  <p>|</p>
</RadialGrid>
```
