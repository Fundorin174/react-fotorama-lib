import React, { VFC } from 'react';
import { Fotorama } from './reactComponentLib/components/Fotorama';
import { photosType } from './reactComponentLib/components/Fotorama/types';

const defaultPhotos: photosType =
  [
    "db8b2631-6a1b-40b0-86d6-60f28ad03985",
    "aca9be64-c303-486e-b68e-087a96548925",
    "d54d6d76-0134-4572-80d8-25d4d7464d14",
    "d1b1c694-0ecb-4c7f-8bc9-f92b48e2599b",
    "106ef16b-c571-4e2d-b955-e8eae3303fe9",
    "36f27f9a-ad56-412a-9dae-c22a9fbff56c",
    "963b98d2-e9d9-4467-a3a3-283931960ebe",
    "485e5717-f066-47e6-8c72-a94c6e9948c2",
    "f5eebb33-8b3f-4df5-8bd1-7a795afcdfa1",
    "023130c8-a0db-4090-af09-64e70921763d",
    "8edb20ab-8344-4770-9c13-f07ae097b4ad",
    "1fb94b66-1165-435f-b814-e796dd4f65f4",
    "2f53da82-79d3-4cf9-a0f6-9104ae2646da",
    "5f46316c-00bf-4679-9ef6-7c931d669394",
    "f000074d-1244-47be-b8af-78e786829ec2",
  ];

export const App: VFC = () => <Fotorama photosUUID = {defaultPhotos} />;
