import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "src/models/customer.entity";
import { createQueryBuilder, Repository } from "typeorm";
import fs = require('fs');
import path = require("path");

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly repo:Repository<Customer>
    ){}

    public async insertDataDummy(){
        const content = JSON.parse(fs.readFileSync(path.join(__dirname, '../../mock_data.json'), {encoding:'utf8', flag:'r'}))
        // console.log(content)
        for (const item of content) {
            await this.repo.save(item)
        }
        return await this.repo.findAndCount()
    }

    public async getListCustomer(pageNumber?: number){
        if(!pageNumber){
            pageNumber=1
        }
        const count = await this.repo.count()
        const data = await this.repo.find({
            take: 10,
            skip: (pageNumber-1)*10
        })
        const result = {
            current_page: pageNumber,
            current_item: 10,
            total_data: count,
            total_page: Math.round(count/10),
            data: data
        }
        return result
    }

    public async getItems(){
        const item = await createQueryBuilder("customer")
        .select("customer.item")
        .from(Customer, "customer")
        .distinctOn(["customer.item"])
        .getMany()
        return item
    }
}
