# Radial Grid

<p>
  	<a href="https://radial-grid.vercel.app/" target="_blank">
    	<img alt="Version" src="https://img.shields.io/npm/v/radial-grid.svg">
	</a>
	<a href="https://radial-grid.vercel.app/" target="_blank">
		<img alt="Downloads" src="https://img.shields.io/npm/dw/radial-grid">
	</a>
	<a href="https://radial-grid.vercel.app/" target="_blank">
		<img src="https://img.shields.io/node/v/radial-grid.svg">
	</a>
  	<a href="https://radial-grid.vercel.app/" target="_blank">
   		<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  	</a>
  	<a href="#" target="_blank">
    	<img alt="License: MIT" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  	</a>
</p>

A library to organize elements into circles instead of boring normal grids. View the [demo](https://radial-grid.vercel.app/) here!

## Installation

`npm install radial-grid`

## Usage

### Basic

This will produce 6 evenly-spaced tick marks, all tilted toward the center.

```js
import { RadialGrid, RadialRow } from "radial-grid";

<RadialGrid>
  <RadialRow>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
</RadialGrid>;
```

### Preserve Child Rotation

Should you want the children you pass to remain in the orientation you
provide, you may use the `preserveChildRotation` prop. For
example, to make a clock-like layout:

```js
<RadialGrid>
  <RadialRow preserveChildRotation>
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
  </RadialRow>
</RadialGrid>
```

### Start and End angles

If you want a more elaborate layout than a simple circle, consider using
the `startAngle` and `endAngle` props. These take
any number (in degrees) to modify the start and end position of the
elements.

**Note:** The way angles are calculated, using custom start
and end angles often produces an undesired effect of the last element
not reaching the given end angle. To fix this, use the `lastMeetEnd` prop to have the first child element sitting on the given start angle, the last child element sitting on the given end angle, and the rest of
the elements evenly spaced throughout.

```js
<RadialGrid>
  <RadialRow startAngle={90} endAngle={270} lastMeetEnd>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
</RadialGrid>
```

### Multiple Rows

One grid can have unlimited rows. Simply add more, and be sure to
specify the `diameter` prop on each with a valid CSS width
value. This diameter represents the outer diameter of the row.

```js
<RadialGrid>
  <RadialRow diameter={"15rem"} startAngle={90} endAngle={270} lastMeetEnd>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
  <RadialRow diameter={"10rem"} startAngle={270} endAngle={450} lastMeetEnd>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
  <RadialRow diameter={"5rem"}>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
</RadialGrid>
```

### Adding a Center

You can add an element in the middle of your circle like so:

```js
<RadialGrid>
  <RadialRow lastMeetEnd>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
    <p>|</p>
  </RadialRow>
  <RadialCenter>
    <p>😀</p>
  </RadialCenter>
</RadialGrid>
```
