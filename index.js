
class accountManager
{
  constructor(disc)
  {
      this.disc=disc
  }
  existAccount(data,func)
  {
    return this.disc.run('account','existAccount',{data:{id:id}},func)  
  }
  get(id,func)
  {
    return this.disc.run('account','getAccount',{data:{id:id}},func)
  }
  create(id,roles,func)
  {
    return this.disc.run('account','createAccount',{data:{id:id,roles:roles}},func)
  }
  update(id,name,value,func)
  {
    return this.disc.run('account','updateData',{data:{id:id,name:name,value:value}},func)
  }
}

module.exports = class accountConfig
{
  constructor(config,dist)
  {
    this.config=config.statics
    this.context=this.config.context 
    this.bootstrap=require('./bootstrap.js')
    this.enums=require('./struct.js') 
    this.tempConfig=require('./config.js')
    global.acc=new accountManager(dist)
  }
  async existAccount(msg,func,self)
  {
    var dt=msg.data
    var acc =await global.db.Search(self.context,'account',{ },dt)
    return func(null,acc)
  }
  sync getAccount(msg,func,self)
  {
    var dt=msg.data
    var acc =await global.db.SearchOne(self.context,'account',{where:{id:dt.id}},{})
    return func(null,acc)
  }
  async createAccount(msg,func,self)
  {
    var dt=msg.data
	
    var acc =await global.db.SearchOne(self.context,'account',{where:{id:dt.id}},{})
    if(acc)
      return func({m:'account001'})
    try{
      await global.db.Save(self.context,'account',['id'],{id:dt.id,roles:dt.roles,createDate:new Date()})
      return func(null,{i:true})
    } 
    catch(exp){
      return func({m:'account002'})
    } 
  }
  async updateData(msg,func,self)
  {
    var dt=msg.data
    if(!dt.value)
      return func({m:'account003'})
    var acc =await global.db.SearchOne(self.context,'account',{where:{id:dt.id}},{})
    if(!acc)
      return func({m:'account004'})
    try{
      var obj={id:dt.id}
      obj[dt.name]=dt.value
      await global.db.Save(self.context,'account',['id'],obj)
      return func(null,{i:true})
    } 
    catch(exp){
      return func({m:'account002'})
    } 

  }
  test(msg,func,self)
  {
    return func(null,{i:true})
  }
}