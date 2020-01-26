function Header(){
    this.idName=$(".main").attr("id");
    this.headerNav=$('#header-nav');
    this.navList=this.headerNav.children("li");
}
Header.prototype.headerRecon=function(){
    var self=this;
    if(self.idName==="news"){
        self.navList.eq(0).addClass("active").siblings().removeClass("active");
    }else if(self.idName==="course"){
        self.navList.eq(1).addClass("active").siblings().removeClass("active");
    }else if(self.idName==="payinfo"){
        self.navList.eq(2).addClass("active").siblings().removeClass("active");
    }else{
        self.navList.eq(3).addClass("active").siblings().removeClass("active");
    }
};

Header.prototype.run=function(){
    this.headerRecon();
}


$(function(){
    var header=new Header;
    header.run();
});
