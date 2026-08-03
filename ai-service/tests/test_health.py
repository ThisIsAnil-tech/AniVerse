import pytest
from app.create_app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    rv = client.get('/health')
    json_data = rv.get_json()
    assert rv.status_code == 200
    assert json_data['status'] == 'UP'

def test_ready_check(client):
    rv = client.get('/ready')
    json_data = rv.get_json()
    assert rv.status_code == 200
    assert json_data['status'] == 'READY'
