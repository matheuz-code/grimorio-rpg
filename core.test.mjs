import test from 'node:test';import assert from 'node:assert/strict';import {name,character,item,roll} from './core.mjs';
test('campanha exige nome válido',()=>{assert.equal(name(' Ilha '),'Ilha');assert.throws(()=>name(' '));assert.throws(()=>name('x'.repeat(81)));});
test('personagem valida atributos',()=>{const p={name:'Viajante',forca:1,agilidade:2,intelecto:3,presenca:4};assert.equal(character(p).intelecto,3);for(const n of [-1,21,1.5,NaN])assert.throws(()=>character({...p,forca:n}));});
test('inventário valida quantidades',()=>{assert.equal(item({name:'Corda',quantity:'2'}).quantity,2);for(const quantity of [0,1000,1.2])assert.throws(()=>item({name:'Corda',quantity}));});
test('dados cobrem tipos, extremos e modificadores',()=>{for(const sides of [4,6,8,10,12,20]){assert.equal(roll(sides,2,3,()=>0).total,5);assert.equal(roll(sides,1,-1,()=>.999999).total,sides-1);}for(const args of [[3,1,0],[6,0,0],[6,21,0],[6,1,101]])assert.throws(()=>roll(...args));});
