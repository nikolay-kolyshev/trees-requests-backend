import { Test, TestingModule } from '@nestjs/testing';
import { TreesRequestsService } from './trees-requests.service';

describe('TreesRequestsService', () => {
  let service: TreesRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreesRequestsService],
    }).compile();

    service = module.get<TreesRequestsService>(TreesRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
