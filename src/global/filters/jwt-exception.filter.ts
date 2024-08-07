import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

@Catch(JsonWebTokenError)
export class JwtExceptionFilter implements ExceptionFilter {
	catch(exception: JsonWebTokenError, host: ArgumentsHost) {
		const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		const request = context.getRequest<Request>();
		const status = HttpStatus.UNAUTHORIZED;

		response.status(status).json({
			success: false,
			statusCode: status,
			error: exception.name,
			message: exception.message,
			timestamp: new Date().toISOString(),
			path: request.url,
		});
	}
}
