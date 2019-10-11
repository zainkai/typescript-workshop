/**
 * Lesson 1
 *  - Types
 *  - Singletons
 */

let num:number = 123
  num = 0.345354 // floats
  num = 0b010101 // binary
  num = 0x10 // hex
  num = Infinity
  num = -Infinity
  num = NaN
  // num = undefined // bad

let str:string = "this is my string that I created."
  // str = null // also bad
  // str = NaN  // still bad

let bool:boolean = true
  bool = false
  // bool = 324 // will not work

let mutatingVariable: any // works like normal javascript
  mutatingVariable = -0.35345
  mutatingVariable = "Hello World!"
  mutatingVariable = true
  mutatingVariable = null

/**
 * Union variables and custom types
 */
type NumStr = number|string
let numstr: NumStr = 123
  numstr = "this can also be a string"
  // ns = null // this will error out

type nil = null|undefined
let anotherVar:nil = null
  anotherVar = undefined
  // anotherVar = "SDfsdf" // we can't do this

/**
 * Arrays, Maps, and Interfaces
 */
const numberArray: number[] = [1,2,3]
const alsoNumberArray: Array<Number> = [4, 3]

const botNamesDict: { [key:string]:string } = {
  'bob': 'ross',
  'sky': 'net'
}

const candyMap: Map<string, string> = new Map<string, string>()
candyMap.set("nom", "reeses")
candyMap.set("yum", "butterfinger")

interface Person {
  firstName: string,
  lastName: string
}
const bob:Person = {
  firstName: 'bob',
  lastName: 'ross'
}

interface worker extends Person {
  jobTitle: string,
  salary?: number
}

const steve: worker = {
  firstName: 'steve',
  lastName: 'ross',
  jobTitle: 'painter',
  // salary: 1000000000000 // this is optional
}


/**
 * Functions, Optional variables, and Beyond
 */
interface Point {
  x: number
  y: number
}

let originPoint: Point = { x:0, y:0 }
function distanceFormula (a:Point, b?:Point): number {
  if (b === undefined) {
    b = originPoint
  }

  const c = Math.pow((a.x - b.x), 2)
  const d = Math.pow((a.y - b.y), 2)
  return Math.sqrt(c + d)
}

const myPoint = { x: 10, y: 10 }
console.log(distanceFormula(myPoint))
console.log(distanceFormula(myPoint, {x: 30, y: 90}))

const sayIsNumber = (x: any): string => {
  return typeof x === 'number' ? 'YES' : 'NO'
}
console.log(sayIsNumber(5435355))
console.log("ggdggffg")

/**
 * Advanced types
 */

// this is a generic function
function arrayTimes10<T>(x: T): Array<T> {
  let result:Array<T> = []
  for (let i = 0; i < 10; i++) {
    result.push(x)
  }

  return result
}

const fooArray = arrayTimes10("foo")
// fooArray.push(1) // Bad this is a string array
console.log(fooArray)

interface myReactTypes {
  callback : (x:string) => number
}

const props:myReactTypes = {
  callback: (someting: string) => {
    console.log("I'm doing somehting with this")
    return 42
  }
}

// This tuple type fixes the return array length to 2
function returnsFooBarTuple (): [string, string] {
  return ["foo", "bar"]
}

function noop(): void {}

enum Color {
  RED = "RED",
  BLUE = 0,
  GREEN = 8
}

function fetchFromApi (): Promise<void> {
  return Promise.resolve()
}
