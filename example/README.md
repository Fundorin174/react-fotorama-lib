# react-fotorama-lib

This is a simple library for create responsive slider from photos, uploaded from https://uploadcare.com/

You can see the template on:
https://fundorin174.github.io/react-fotorama-lib/

## Installation:

To install react-fotorama-lib:

```
npm i react-fotorama-lib
```
or
```
yarn add react-fotorama-lib
```

## Dependencies:

react <br>
react-dom <br>
styled-components <br>
react-hammerjs <br>
typescript <br>

## How to use:
import Fotorama from 'react-fotorama-lib'; <br>

upload UUID (not url) of you photos from [https://uploadcare.com/](https://uploadcare.com/) and create array, like this: <br>
const photos = [ <br>
    "db8b2631-6a1b-40b0-86d6-60f28ad03985", <br>
    "aca9be64-c303-486e-b68e-087a96548925", <br>
    "d54d6d76-0134-4572-80d8-25d4d7464d14", <br>
    "d1b1c694-0ecb-4c7f-8bc9-f92b48e2599b", <br>
    "106ef16b-c571-4e2d-b955-e8eae3303fe9", <br>
    "36f27f9a-ad56-412a-9dae-c22a9fbff56c", <br>
    "963b98d2-e9d9-4467-a3a3-283931960ebe", <br>
    "485e5717-f066-47e6-8c72-a94c6e9948c2", <br>
    "f5eebb33-8b3f-4df5-8bd1-7a795afcdfa1", <br>
    "023130c8-a0db-4090-af09-64e70921763d", <br>
    "8edb20ab-8344-4770-9c13-f07ae097b4ad", <br>
    "1fb94b66-1165-435f-b814-e796dd4f65f4", <br>
    "2f53da82-79d3-4cf9-a0f6-9104ae2646da", <br>
    "5f46316c-00bf-4679-9ef6-7c931d669394", <br>
    "f000074d-1244-47be-b8af-78e786829ec2", <br>
  ]; <br>

import Fotorama component into your project with the required property  {photosUUID}  <br>
...you code... <br>
 (<Fotorama photosUUID = {photos} />); <br>
...you code... <br>
## Props type:

FotoramaProps = { <br>
  photosUUID: string[];  <br>
  width?: number;  <br>
  height?: number;  <br>
  backgrounColor?: string;  <br>
};