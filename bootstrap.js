module.exports = class paymentBootstrap{
  constructor(config)
  {
    this.funcs=[
      {
          name:'test',
          title1:'test' ,
          inputs:[
          {
              name:'id',
              type:'string',
              nullable:false}
          ]
      },
      {
          name:'getAccount',
          title1:'if exist account retuen this account' ,
          inputs:[
          {
              name:'id',
              type:'string',
              nullable:false}
          ]
      },
      {
          name:'createAccount',
          title1:'if not exist account create new account'  ,
          inputs:[
          {
              name:'id',
              type:'string',
              nullable:false},
          {
              name:'roles',
              type:'number',
              nullable:false}
          ]
      },
      {
          name:'updateData',
          title1:'update data when changed' ,
          inputs:[
          {
              name:'id',
              type:'string',
              nullable:false},
          {
              name:'name',
              type:'string',
              nullable:false}
          ]
      },
    ]
    this.auth=['test',
        ]
  }
}