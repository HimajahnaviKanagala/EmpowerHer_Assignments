function countCategories(categories){
    const counts=categories.reduce((acc,category)=>{
        acc[category]=(acc[category]||0)+1
        return acc
    },{});
    const sorted=Object.entries(counts)
    .sort((a,b)=>b[1]-a[1])
    const sortedObject=Object.fromEntries(sorted);
    return sortedObject;
}
const categories=[
    "electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"
]
console.log(countCategories(categories));