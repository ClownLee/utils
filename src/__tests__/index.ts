import {
  isNumber,
  thousandth,
  zeroFilling,
  arrayToTree,
  treeToArray,
  arrayMax,
  arrayMin,
  SM4,
  /*
  findParentTree,
  findParentArr,
  deepClone */
} from '../index';

test('isNumber', () => {
  return expect(isNumber(53.2)).toBeTruthy();
});

test('thousandth', () => {
  return expect(thousandth('-656261.124545')).toBe('-656,261.124545');
});

test('zeroFilling', () => {
  return expect(zeroFilling(5, 4)).toBe('0005');
});

test('arrayToTree', () => {
  return expect(
    arrayToTree([
      {
        id: 1,
        content: 'c1',
      },
      {
        id: 2,
        content: 'c1',
        pid: 3,
      },
      {
        id: 3,
        content: 'c1',
        pid: 1,
      },
      {
        id: 4,
        content: 'c1',
        pid: 2,
      },
    ]),
  ).toMatchObject([
    {
      children: [
        {
          children: [
            {
              children: [
                {
                  content: 'c1',
                  id: 4,
                },
              ],
              content: 'c1',
              id: 2,
            },
          ],
          content: 'c1',
          id: 3,
        },
      ],
      content: 'c1',
      id: 1,
    },
  ]);
});

test('treeToArray', () => {
  return expect(
    treeToArray(
      [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      content: 'c1',
                      id: 4,
                    },
                  ],
                  content: 'c1',
                  id: 2,
                },
              ],
              content: 'c1',
              id: 3,
            },
          ],
          content: 'c1',
          id: 1,
        },
      ],
      {
        idField: 'id',
        pidField: 'pid',
        childrenField: 'children',
      },
    ),
  ).toMatchObject([
    {
      content: 'c1',
      id: 1,
      pid: undefined,
    },
    {
      content: 'c1',
      id: 3,
      pid: 1,
    },
    {
      content: 'c1',
      id: 2,
      pid: 3,
    },
    {
      content: 'c1',
      id: 4,
      pid: 2,
    },
  ]);
});

test('arrayMax', () => {
  expect(arrayMax(['5', '4', '3', '2', '1', '0'])).toBe(5);
});

test('arrayMin', () => {
  expect(arrayMin([5, 4, '3', '1', 1, 0])).toBe(0);
});

let sm4Config = {
  // encrypt/decypt main key; cannot be omitted
  key: 'JeF8U9wHFOMfs2Y8',
 
  // optional; can be 'cbc' or 'ecb'
  mode: 'cbc', // default
 
  // optional; when use cbc mode, it's necessary
  iv: 'UISwD9fW6cFh9SNS', // default is null
 
  // optional: this is the cipher data's type; Can be 'base64' or 'text'
  cipherType: 'base64' // default is base64
}

test('SM4.encrypt', () => expect((new SM4(sm4Config as any)).encrypt('√×❤一二三')).toBe('xCCqIps8lqPHEMbPag6mrOH4jViGtvdVdsGkKzJ5Chk='));
test('SM4.decrypt', () => expect((new SM4(sm4Config as any)).decrypt('xCCqIps8lqPHEMbPag6mrOH4jViGtvdVdsGkKzJ5Chk=')).toBe('√×❤一二三'));
