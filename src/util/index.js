export const sortingList = (key, array) => {
  const sortList = [...array]
  switch (key) {
    case "asc":
      sortList.sort((a, b)=> a.title<b.title ? -1 : 1)
      return sortList;
    case "desc":
      sortList.sort((a, b)=> a.title>b.title ? -1 : 1)
      return sortList;
    default:
      console.log("Incorrect value")
      return sortList;
  }
}