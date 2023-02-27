export default async (req, res) => {
  try {
    const fileContent = await fetch("/animals.json")
    const data = await fileContent.json()
    return data
  } catch (e) {
    console.log(e)
  }
}