const state1 = { username: "john", point: 100, loading: true };

// const state2=state1


const state2 =Object.assign({},state1,{loading:false},{point:75},{success:true})

// state2.loading = false;
// state2.point = 75;
// state2["success"] = true;

console.log(state2);
console.log(state1)
