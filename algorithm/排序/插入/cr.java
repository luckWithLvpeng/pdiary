package 排序.插入;

import java.util.Arrays;

/**
 * descriptionTODO
 * <p>时间 2020/7/22 - 3:38 下午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class cr {
    public static void sort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j > 0; j--) {
                if (arr[j] < arr[j -1]) {
                    swap(arr,j , j-1);
                }
            }
        }
    }
    public static void swap(int[] arr, int i,int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void main(String[] args) {
        int[] arr = {10,4,3,2,5,8,1,9};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
