import {
  isNumber,
  thousandth,
  zeroFilling,
  arrayToTree,
  treeToArray,
  arrayMax,
  arrayMin,
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
