import { Controller, Post, Body, Get, Query, Res, Render } from "@nestjs/common";
import { CustomerService } from "./customer.service";

@Controller('/data')
export class CustomerController {
    constructor(private serv:CustomerService){}

    @Get()
    public async insert(){
        return await this.serv.insertDataDummy();
    }

    @Get('/customer')
    @Render('index')
    async root(@Query('pageNumber') pageNumber: number){
        const result = {
            data: await this.serv.getListCustomer(pageNumber),
            
        }
        return result
    }

    @Get('/customer/pivot')
    @Render('pivot')
    async pivot(@Query('pageNumber') pageNumber: number){
        const item = await this.serv.getItems()
        const result = {
            data: await this.serv.getListCustomer(pageNumber),
            product: item
        }
        return result
    }
}