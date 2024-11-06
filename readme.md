# Nata.ts

Nata.ts adalah framework frontend opiniated yang dibangun berdasarkan prinsip pengontrolan penuh atas proses rendering sehingga memungkinkan pengaturan prioritas dan komposisi UI secara fleksibel.

# Penggunaan

```typescript
const element = HTML.element(HTML.div)
                    .catch((e) => `Galat: ${e.message}`)
                    .data((data) => {
                        ...data,
                        name: "Sam"
                    })
                    .then(data => {
                        ...data,
                        greeting: `hello, ${data.name}`
                    })
                    .child(data => data.greeting)
UI.render(element)
  .parent(document.body)
```

```typescript
const greeting = UI.state('Hallo')
const element = HTML.element(HTML.div)
                    .catch((e) => `Galat: ${e.message}`)
                    .state(greeting)
                    .then(({state}) => state.setValue('Hallo. Sam!'))
                    .child(data => greeting.value)
UI.render(element)
  .parent(document.body)
```