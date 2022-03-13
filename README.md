# Abadima's Rich Presence

<div align="center">
  <a href="https://nodejs.org/en/download/">
    <img src="https://img.shields.io/badge/Node.js-%2016.14.0-green.svg?style=for-the-badge&logo=Node.js" alt="Full-Package">
  </a>
  <a href="https://discord.gg/WpuYSe3xGt">
    <img src="https://img.shields.io/discord/905979173070340097.svg?label=Support&logo=Discord&colorB=7289da&style=for-the-badge" alt="Support Server">
  </a>
  <a href="https://github.com/abadima/Evaluate-API">
    <img src="https://img.shields.io/github/workflow/status/Abadima/Evaluate-API/Build/main?style=for-the-badge" alt="Code Status">
  </a>
</div>



## **Information**

"Let us run your code, so you don't have to." 
I have decided to discontinue this (for now) due to my failures, I might work on it again soon, meh

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FAbadima%2Fevaluation-api)

### Website
```
eval.abadima.dev/:language/:code
```

### Languages

| Endpoint | Language |
| -------- | ----------- |
| bf | Brain Fuck |
| cfs | CoffeeScript |
| cs | C# |
| js | JavaScript |
| lua | Lua |
| py | Python |
| ts | TypeScript |


### Example Responses

| Status | Message |
| -------- | ----------- |
| Success | {"status":"success","result":"true"} |
| Error |{"status":"error","result":"ReferenceError: True is not defined"} |
| Fatal | {"status":"fatal","result": "fatal issue shows here"} |

#### Headers

`"content-type": "application/json"`