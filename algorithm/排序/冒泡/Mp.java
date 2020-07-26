package 排序.冒泡;


import java.util.Arrays;

/**
 * descriptionTODO
 * <p>时间 2020/7/22 - 3:38 下午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class Mp {
    public static void sort(int[] arr) {
        for (int i = 0; i < arr.length -1; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                min = arr[j] < arr[min] ? j : min;
            }
            if (min != i) {
                swap(arr,i, min);
            }
        }
    }
    public static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void main(String[] args) {
        int[] arr = {4,3,2,5,8,1,9};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
