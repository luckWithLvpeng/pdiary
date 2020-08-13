package 实现一个正常的栈增加一个返回min的方法;

import java.util.Stack;

/**
 * 为一个正常的栈实现一个getMin方法
 * <p>时间 2020/8/14 - 1:53 上午</p>
 *
 * @author 吕蓬
 * @version 1.0
 */
public class implement {
    private Stack <Integer> stackData;
    private Stack <Integer> stackMin;

    public static void main(String[] args) {

    }
    public void push(int value) {
        if(this.stackMin.isEmpty()) {
            this.stackMin.push(value);
        } else if (value < this.stackMin.peek()) {
            this.stackMin.push(value);
        } else {
            this.stackMin.push(this.stackMin.peek());
        }
        this.stackData.push(value);
    }
    public int pop() {
        if (this.stackData.isEmpty()) {
            throw new Error("Underflow");
        }
        this.stackMin.pop();
        return this.stackData.pop();
    }
    public int getMin() {
        if (this.stackData.isEmpty()) {
            throw new Error("Underflow");
        }
        this.stackData.pop();
        return this.stackMin.pop();
    }
    public boolean isEmpty() {
        return this.stackData.isEmpty();
    }
}
