import {
  complement,
  converge,
  isEmpty,
  compose,
  values,
  propEq,
  concat,
  filter,
  reduce,
  isNil,
  prop,
  all,
  map,
  any,
  is,
  or
} from 'ramda';

export const isNilOrEmpty = converge(or, [isNil, isEmpty]);

export const isNilOrString = converge(or, [is(String), isNil]);

export const allNilOrString = all(isNilOrString);

export const allNilOrEmpty = all(isNilOrEmpty);

export const anyNilOrEmpty = any(isNilOrEmpty);

export const isNotNil = complement(isNil);

export const joinStrings = (...xs: string[]) => reduce(concat, '', xs);

export const isProduction = propEq('production', true);

export const composeUrl = (args: ReadonlyArray<(...a: any[]) => any>) =>
  compose(
    converge(joinStrings, args),
    prop('requestApi')
  );

export const objectToButton = obj => [{ name: obj.name, value: obj.id }];

export const filterByEmptyObjectFields = object =>
  filter(complement(isNilOrEmpty), values(object));

export const objectsToButtons = res =>
  map(obj => ({ name: obj.name, value: obj.id }), res);

export const stringArrayToButtons = res =>
  map(str => ({ name: str, value: str }), res);

export const handleNull = fun => data =>
  isNilOrEmpty(data) ? null : fun(data);

export const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

export const executeIfFunction = f => (f instanceof Function ? f() : f);

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key));
