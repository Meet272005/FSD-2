var a = {
  name: 'Test', //string
  age: 20, //number
  ispass: true, //boolean
  subject: { FSD2: 'NAS', FCSP: 'TAT' }, //object
  marks: [25, 23, 21], //array
  test: null
}
console.log(a)
console.log(a.name)
console.log(a['name'])
console.log(a.subject)
console.log(a.subject.FCSP)
console.log(a.marks[2])
console.log(a.test)
