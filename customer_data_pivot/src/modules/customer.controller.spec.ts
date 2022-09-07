import { Test, TestingModule } from "@nestjs/testing";
import { request } from "http";
import { CustomerController } from "./customer.controller"
import { CustomerService } from "./customer.service";

describe('CustomerController', () => {
    let controller: CustomerController;

    const mockCustomerService = {}

    beforeEach(async () => {
        const cust: TestingModule = await Test.createTestingModule({
            controllers: [CustomerController],
            providers: [CustomerService]
        })
            .overrideProvider(CustomerService)
            .useValue(mockCustomerService)    
            .compile()

        controller = cust.get<CustomerController>(CustomerController);
        }
    )

    it('should be defined', () => {
        expect(controller.root).toBeDefined()
    })
})