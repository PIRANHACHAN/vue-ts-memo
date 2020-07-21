// DataHelper类 - 负责localstorage操作
class DataHelper {
  dataKey: string
  primaryKey: string

  // 一、构造函数，为对象添加各种属性
  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  // 1.读取全部数据，返回数据，若没读到，返回空数组
  readData(): any {
    // 1)读取本地数据，根据dataKey
    let strData: string | null = localStorage.getItem(this.dataKey)

    // 2)将读取的json数组字符串转成数组对象
    let arrData: any = []
    if (strData != null) {
      arrData = JSON.parse(strData)
    }

    // 3)返回数组对象
    return arrData
  }
  // 2.存入本地数据
  saveData(arrData: Array<Object>): void {
    // 1)将数组转成json字符串
    let str: string = JSON.stringify(arrData)
    // 2)将字符串保存到本地localstorage中
    localStorage.setItem(this.dataKey, str)
  }
  // 3.新增数据
  addData(newDataObj: any): number {
    let dataArray = this.readData()
    if (dataArray == null) {
      dataArray = []
    }
    // 自动生成主键值
    let newId =
      dataArray.length > 0
        ? dataArray[dataArray.length - 1][this.primaryKey] + 1
        : 1
    newDataObj[this.primaryKey] = newId
    // 将添加了主键值的对象追加到数组
    dataArray.push(newDataObj)
    // 将数组存到localstorage中
    this.saveData(dataArray)
    // 返回添加了id的数据对象
    return newId
  }
  // 4.删除数据
  removeDataById(id: string | number): boolean {
    // 读取本地数组
    let arr = this.readData()
    // 查找要删除评论对象的下标，并保存到本地
    let index = arr.findIndex((ele: any) => {
      return ele[this.primaryKey] == id
    })
    // 如果下标大于-1，则删除数组中该下标元素对象，并返回true
    if (index > -1) {
      arr.splice(index, 1)
      // 保存到本地
      this.saveData(arr)
      return true
    }
    // 否则返回false
    return false
  }
}

export default DataHelper
