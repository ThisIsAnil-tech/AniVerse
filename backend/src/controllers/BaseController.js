class BaseController {
  sendSuccess(res, data = {}, message = 'Operation successful', meta = null, statusCode = 200) {
    const response = {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
    if (meta) {
      response.meta = meta;
    }
    return res.status(statusCode).json(response);
  }

  sendError(res, error = 'Error occurred', code = 'ERROR', statusCode = 400, details = {}) {
    return res.status(statusCode).json({
      success: false,
      error: typeof error === 'string' ? error : error.message,
      code,
      details,
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = BaseController;
