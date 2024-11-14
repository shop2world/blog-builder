#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Django를 가져올 수 없습니다. "
            "Django가 설치되어 있는지 확인하세요. 다음 오류가 발생했습니다: %s" % exc
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main() 