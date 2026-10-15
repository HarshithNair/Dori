'use client';
import {hi} from './translations-hi';
import {mr} from './translations-mr';
export type Lang='English'|'Hindi'|'Marathi';
export const langs:Lang[]=['Hindi','Marathi','English'];
export const langCode:Record<Lang,string>={English:'en',Hindi:'hi',Marathi:'mr'};
export const langNative:Record<Lang,string>={English:'English',Hindi:'हिन्दी',Marathi:'मराठी'};
const dict:Record<string,Record<string,string>>={hi,mr};
/** Translates a UI string. The English source text is the key, so an untranslated
 *  string falls back to readable English instead of a raw identifier. */
export function translate(lang:string,key:string):string{
  const d=dict[langCode[lang as Lang]||'en'];
  return (d&&d[key])||key;
}
export type T=(key:string)=>string;
/** Fills {0}, {1}… placeholders so translations control word order. */
export function fmt(tpl:string,...args:(string|number)[]):string{
  return tpl.replace(/\{(\d+)\}/g,(_,i)=>String(args[Number(i)]??''));
}
