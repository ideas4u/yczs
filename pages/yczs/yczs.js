Page(
  {
    data: {
      src: '../../pages/images/c5.jpg',

      inputUserName: '',
      inputPassWord: '',
      successRes:'',
      postLinkCon:'haha'
      

    },
  
    bindUserName: function (e) {
      this.setData({
        inputUserName: e.detail.value
      })
    },
    bindPassWord: function (e) {
      this.setData({
        inputPassWord: e.detail.value
      }
      )
    },
    reqflask: function () {
      var that = this
      this.data.postLinkCon="addtocart"
      console.log(this.data.postLinkCon)
      wx.request({
        url: 'https://yczs.oniondfs.com/getdata',
        data: {
          userName: this.data.inputUserName,
          passWord: this.data.inputPassWord
        },
        method: "POST",
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data);
          //console.log('hello')
          that.setData({
            successRes: res.data.userNames[0]['message']
          })
          
          
        }
        
      })
      console.log(this.data.inputUserName)
      console.log(this.data.inputPassWord)
      //console.log(successRes)
    },
    reqclean: function () {
      var that = this
      this.data.postLinkCon = "cleancart"
      console.log(this.data.postLinkCon)
      wx.request({
        url: 'https://yczs.oniondfs.com/emptythecart',
        data: {
          userName: this.data.inputUserName,
          passWord: this.data.inputPassWord
        },
        method: "POST",
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data);
          //console.log('hello')
          that.setData({
            successRes: res.data.userNames[0]['exeTime']
          })


        }
      })
      console.log(this.data.inputUserName)
      console.log(this.data.inputPassWord)
      //console.log(successRes)
    },
    
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

    }
  }

)
