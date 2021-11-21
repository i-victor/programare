// let arr = [2, 7, 3, 10, 1, 8];
// let sortedArr = QuickSort(arr);

function mergeSort(arr) {

	const merge = (left, right) => {
		let arr = []
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift())
			} else {
				arr.push(right.shift())
			}
		}
		return [ ...arr, ...left, ...right ]
	}

	const half = arr.length / 2

	if(arr.length < 2){
		return arr
	}

	const left = arr.splice(0, half)
	return merge(mergeSort(left), mergeSort(arr))
}

arr2 = [4, 8, 7, 2, 11, 1, 3];
console.log("Sorted Array:" ,mergeSort(arr2));
