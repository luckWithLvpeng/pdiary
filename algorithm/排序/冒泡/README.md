## 冒泡排序思路

比较当前数字和它后面的一位, 假如大于,则交换, 首轮遍历, 最大值到 n 位置 , 0 ~ n-1 是无序

接着 重复上一次 , 最大值到 n - 1 位置 , 此时 0 ~ n-2 是无序的

....

重复多次

最后, 最小数字跑到 0 位置, 此时 0 ~ n 是有序的