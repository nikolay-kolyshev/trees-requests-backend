import { Test, TestingModule } from '@nestjs/testing';
import { TreesRequestsController } from './trees-requests.controller';

describe('CitiesController', () => {
  let controller: TreesRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreesRequestsController],
    }).compile();

    controller = module.get<TreesRequestsController>(TreesRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
