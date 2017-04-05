//将事件类型赋值为常量，一般是方便多人开发使用，使事件类型集中的同时也保证了各组件和各模块能够响应同一类型,通常是为了在事件类型前加前置（方便区分并匹配不同模块中的事件类型，例如ADD_TODO = "todoList/ADD_TODO" ）,不使用也可。

//todoList
export const ADD_TODO = "ADD_TODO"
export const SWITCH_DONE = "SWITCH_DONE"
export const SET_SHOW_TYPE = "SET_SHOW_TYPE"

export const filter = {
    ALL: "all",
	DONE: "done",
	ACTIVE: "active"
}


//EMP

//为节省时间，EMP实例不使用常量，直接使用字符串