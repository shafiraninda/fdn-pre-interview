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
    public async root(@Query('pageNumber') pageNumber?: number){
        const data = await this.serv.getListCustomer(pageNumber)
        const result = {
            data: data,
        }
        return result
    }

    @Get('/customer/pivot')
    @Render('pivot')
    public async pivot(@Query('pageNumber') pageNumber?: number){
        const item = await this.serv.getItems()
        const data = await this.serv.getListCustomer(pageNumber)
        const result = {
            data: data,
            product: item
        }
        return result
    }
}