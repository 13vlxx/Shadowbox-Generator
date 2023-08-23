export default function getBoxShadowValue(shadows) {
  let finalString = "";
  const length = shadows.length;
  shadows.forEach((shadow, index) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") finalString += `${input.value}px `;
        else if (input.type === "color") finalString += `${input.value}`;
      });

      if (shadow.inset) finalString += " inset";

      if (index === length - 1) finalString += ";";
      else finalString += ",";
    }
  });

  return finalString;
}
