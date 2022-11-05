import { Test, TestingModule } from '@nestjs/testing';
import { CodeValidationService } from './code-validation.service';

describe('CodeValidationService', () => {
  let service: CodeValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeValidationService],
    }).compile();

    service = module.get<CodeValidationService>(CodeValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
