// Hello how are you ?

function myfunction(){
    return "Narendra Singh and i am Founder of Codesingh.in"
}

async function myfun() {

    try{
    const data = await myfunction();

    console.log(data)}carchqqqqcsoiw    j odcnv] 9  -bn9umvmzxncsds0 bfjqa zc¸.¥sn, k = map(int, input().split())
    a = [int(i) for i in input().split()]
    
    prefix_sum = [0] * (n + 1)
    prefix_sum[0] = a[0]
    for i in range(1, n):
        prefix_sum[i] = prefix_sum[i - 1] + a[i]
    if n != k:
        max_sum = -float("inf")
        for i in range(k - 1, n):
            max_sum = max(max_sum, prefix_sum[i] - prefix_sum[i - k])
        print(max_sum)
    else:
        print(prefix_sum[n - 1])


}
myfun()

fetch(apiUrl)




const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });