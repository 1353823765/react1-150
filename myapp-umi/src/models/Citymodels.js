export default {
  //命名空间
  namespace: 'city',
  //共享状态初始值定义起始状态
  state: {
    cityname: '北京',
    cityId: '110100',
  },
  reducers: {
    changecity(prevState, action) {
      // console.log(action);
      return {
        ...prevState,
        cityname: action.pyload.cityname,
        cityId: action.pyload.cityId,
      };
    },
  },
};
