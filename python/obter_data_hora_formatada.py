from datetime import datetime

def data_hora_atual():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")
