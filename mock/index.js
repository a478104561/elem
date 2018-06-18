import Mock from 'mockjs'
import data from '../data.json'

Mock.mock('/page/seller', {
  mes: 0,
  suc: '成功',
  data: data.seller
})

Mock.mock('/page/goods', {
  mes: 0,
  suc: '成功',
  data: data.goods
})

Mock.mock('/page/ratings', {
  mes: 0,
  suc: '成功',
  data: data.ratings
})
