package 排序.归并;

import java.util.Arrays;

/**
 * descriptionTODO
 * <p>时间 2020/7/22 - 3:38 下午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class gb {
    /**
     * 归并排序: 递归实现
     * @param arr 排序参数
     */
    public static void mergeSort(int[]arr) {
        _mergeSort(arr, 0, arr.length -1);
    }
    private static void _mergeSort(int[] arr, int L,  int R) {
        if (L == R) return;
        int M = L + ((R - L) >>> 1);
        _mergeSort(arr, L, M);
        _mergeSort(arr, M + 1, R);
        merge(arr, L, M, R);
    }

    /**
     * 把俩有序数组合并为一个
     * @param arr 数组
     * @param L 左边界
     * @param M 中点
     * @param R 又边界
     */
    private static void merge(int[] arr, int L, int M, int R) {
        int length = R - L + 1;
        int[] tmp = new int[length];
        int i = 0;
        int p1 = L;
        int p2 = M + 1;
        while (p1 <= M && p2 <= R) {
            tmp[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
        }
        while (p1 <= M) {
            tmp[i++] = arr[p1++];
        }
        while (p2 <= R) {
            tmp[i++] = arr[p2++];
        }
        for (int j = 0; j < length; j++) {
            arr[L++] = tmp[j];
        }
    }
    public static void mergeSort2(int[] arr) {
        int N = arr.length;
        int mergeSize = 1;
        while (mergeSize < N) {
            int L = 0 ;
            while (L < N) {
                int M = L + mergeSize - 1;
                // 当 M 来到数组的末尾, 说明右侧已经无须merge
                if (M >= (N -1)) {
                    break;
                }
                // R 不能越界
                int R = Math.min(M + mergeSize, N -1);
                merge(arr, L, M, R);
                L = R+1;
            }
            // 有利于大数组越界
            if (mergeSize > (N >> 1)) break;
            mergeSize = (mergeSize << 1);
        }
    }
    public static void main(String[] args) {
        int[] arr = {4,3,2,5,8,1,9};
        mergeSort2(arr);
        System.out.println(Arrays.toString(arr));
    }
}
