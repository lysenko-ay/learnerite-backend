import { Test, TestingModule } from '@nestjs/testing';
import { CodeValidationController } from './code-validation.controller';

describe('CodeValidationController', () => {
  let controller: CodeValidationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeValidationController],
    }).compile();

    controller = module.get<CodeValidationController>(CodeValidationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
