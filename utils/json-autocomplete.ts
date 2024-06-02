export function correctJsonString(jsonString) {
  if (!jsonString) return null

  const dataCloseChar = {
    "{": "}",
    "[": "]",
    '"': '"'
  }

  let string = jsonString
    .trim()
    .replace(/(\r\n|\n|\r|\s{2,})/gm, "")
    .replace(/(?<=:)([a-zA-Z]+)(?=\s*(?![,\}])(?:[,\}\s]|$))/g, " null")

  let missingChars = []
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char === missingChars[missingChars.length - 1]) {
      missingChars.pop()
    } else if (dataCloseChar[char]) {
      missingChars.push(dataCloseChar[char])

      if (char === "{") {
        missingChars.push(":")
      }
    }
  }
  if (missingChars[missingChars.length - 1] === ":") {
    if (string[string.length - 1] !== "{") {
      missingChars[missingChars.length - 1] = ": null"
    } else {
      missingChars.pop()
    }
  }
  const missingCharsString = missingChars.reverse().join("")
  const completeString = string + missingCharsString
  const cleanedString = completeString
    .replace(/"":/g, "")
    .replace(/":}|": }/g, '": null }')
    .replace(/,""}|,}|,\"\w+\"}/g, "}")
    .replace(/},]/g, "}]")

  return cleanedString
}
